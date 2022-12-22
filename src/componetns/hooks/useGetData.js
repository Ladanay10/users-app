import axios from "axios";
import { useState, useEffect } from "react";

export function useGetData(url) {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		(
			async function () {
				try {
					setLoading(true);
					await axios.get(url).then(response => setUsers(response.data))
				} catch (error) {
					setError(error)
				} finally {
					setLoading(false)
				}
			}
		)()
	}, [url])
	return { users, setUsers, error, loading }
}