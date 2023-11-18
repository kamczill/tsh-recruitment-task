type LoginButtonProps = {
  classes: string;
};

export const LoginButton = ({ classes }: LoginButtonProps) => {
  return (
    <button
      className={`text-sm whitespace-nowrap border border-primaryBlue font-semibold text-primaryBlue rounded px-6 py-2 ${classes}`}
    >
      Log in
    </button>
  );
};
