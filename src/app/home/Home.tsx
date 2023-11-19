import { useQuery } from '@tanstack/react-query';

import { ProductCard } from 'ui/productCard/ProductCard';
import axiosClient from 'api/axios';

export const Home = () => {
  const getProducts = async () => {
    try {
      const response = await axiosClient('/products?limit=8');
      return response.data; // Ensure you return the data from the function
    } catch (err) {
      throw err; // Rethrow the error so React Query can catch it
    }
  };

  const {
    isLoading,
    isError,
    data, // This will hold the products data
    error,
  } = useQuery(['products'], getProducts); // Changed the query key to 'products'

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // const {
  //   data: usersResponse,
  //   isFetching: isFetchingUsers,
  //   isFetched: areUsersFetched,
  //   hasNextPage: hasMoreUsers,
  //   fetchNextPage: loadMoreUsers,
  //   isFetchingNextPage,
  // } = useUsers();

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 mt-6 lg:max-w-[1224px]">
          {data?.items.map((prod) => (
            <ProductCard
              key={prod.id}
              active={prod.active}
              description={prod.description}
              id={prod.id}
              image={prod.image}
              promo={prod.promo}
              rating={prod.rating}
              name={prod.name}
            />
          ))}
        </div>
      </div>

      {/* <h2>Home</h2>
      <p>
        <Translation id="home.helloWorld" />
        <span style={{ margin: '0 1rem' }}>&#x2190;</span>
        <span>
          This text is translated using <strong>Translation</strong> component.
        </span>
        <span>Click </span>
        <button
          style={{ fontSize: 'inherit' }}
          onClick={() => setLocale(locale === AppLocale.pl ? AppLocale.en : AppLocale.pl)}
        >
          here
        </button>{' '}
        to change language.
      </p>
      <p>This is a starter project for TSH React application. Click on navigation links above to learn more.</p>
      <hr />
      <LocationInfo />
      <hr />
      <div style={{ marginBottom: '2rem' }}>
        <p>User information &#129489;</p>
        <div style={{ marginBottom: '2rem', display: 'flex', gap: '16px' }}>
          <button
            disabled={isAuthenticating || isAuthenticated}
            onClick={() => login({ password: 'tsh-react-starter', username: 'tsh' })}
          >
            {isAuthenticating ? 'Logging in...' : 'Click to login'}
          </button>
          <button disabled={!isAuthenticated} onClick={logout}>
            Click to logout
          </button>
        </div>
        {isAuthenticating && <p>Loading data about you...</p>}
        {isAuthenticated && (
          <code style={{ background: '#BADA55', padding: '1rem' }}>{JSON.stringify(user, null, 2)}</code>
        )}
      </div>
      <div>
        <p>List of users &#129489;</p>
        <div style={{ marginBottom: '2rem' }}>
          <ul>
            {areUsersFetched &&
              usersResponse?.pages?.map((page, index) => (
                <Fragment key={index}>
                  {page.users?.map((user) => (
                    <li key={user.id}>
                      <button
                        onClick={() => {
                          navigate(AppRoute.user, { params: { id: user.id } });
                        }}
                      >
                        User {user.id}
                      </button>
                    </li>
                  ))}
                </Fragment>
              ))}
          </ul>
          {isFetchingNextPage && <p>Loading more users...</p>}
          <button disabled={isFetchingNextPage || isFetchingUsers || !hasMoreUsers} onClick={() => loadMoreUsers()}>
            Load more
          </button>
        </div>
      </div> */}
    </>
  );
};
