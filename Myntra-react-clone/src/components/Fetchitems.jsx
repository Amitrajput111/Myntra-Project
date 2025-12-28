import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    // Use relative path for same-project API, or env var for external API
    const apiUrl = import.meta.env.VITE_API_URL || '';
    const apiEndpoint = apiUrl ? `${apiUrl.replace(/\/$/, '')}/api/items` : '/api/items';
    fetch(apiEndpoint, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(data.items));
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
          dispatch(fetchStatusActions.markFetchingFinished());
          // Optionally dispatch an error state if you have error handling in your store
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return <></>;
};

export default FetchItems;

