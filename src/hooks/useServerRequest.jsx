import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectUserSession } from '../redux/selectors';
import { server } from '../bff';

const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return useCallback(
		(operation, ...params) => {
			const request = ['register', 'authorize'].includes(operation)
				? params
				: [session, ...params];

			return server[operation](...request);
		},
		[session],
	);
};

export default useServerRequest;