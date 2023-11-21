import { useState, useEffect, useRef } from 'react';

import { CloseIcon } from 'assets/icons/CloseIcon';
import { useProduct } from 'hooks';

import { ModalProps } from './Modal.types';

export const Modal = ({ onClose, productId }: ModalProps) => {
  const { data, isError, isFetching, isSuccess } = useProduct(productId);
  const [loadedImage, setLoadedImage] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (isSuccess && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isSuccess, onClose]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const renderImageSection = () => (
    <div className="w-full h-[354px]">
      {!loadedImage && (
        <div className="animate-pulse flex space-x-4 w-full h-full rounded-lg">
          <div className="bg-coolGray h-full w-full rounded-lg"></div>
        </div>
      )}
      <img
        src={data?.image}
        alt={data?.name}
        onLoad={() => setLoadedImage(true)}
        className={`${!loadedImage && 'hidden'} w-full h-full rounded-t-lg`}
      />
    </div>
  );

  const renderContent = () => {
    if (isFetching) {
      return (
        <>
          <div className="h-8 w-10/12 bg-slate-200 rounded col-span-2"></div>
          <div className="h-5 bg-slate-200 rounded col-span-1"></div>
          <div className="h-5 bg-slate-200 rounded col-span-1"></div>
        </>
      );
    }

    if (isSuccess) {
      return (
        <>
          <h3 className="text-almostBlack text-2xl leading-10 font-semibold">{data?.name}</h3>
          <p className="text-darkGray font-semibold text-lg leading-6">{data?.description}</p>
        </>
      );
    }

    if (isError) {
      return (
        <div className="h-[300px] w-full flex flex-col items-center justify-center">
          <h3>Something went wrong!</h3>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-almostBlack bg-opacity-90 z-40"
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onClose();
          }
        }}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-white w-full rounded-lg shadow-lg mx-6 flex flex-col relative max-w-[600px]" ref={modalRef}>
          {/* Close Button */}
          <div className="flex justify-end absolute z-20 w-full pt-6 pr-6">
            <button onClick={onClose}>
              <CloseIcon color="#1A1B1D" />
            </button>
          </div>

          {renderImageSection()}
          <main className="p-6 flex flex-col gap-2">{renderContent()}</main>
        </div>
      </div>
    </>
  );
};
