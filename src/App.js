import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';

import { PrivateRoute, PublicRoutes } from './routes/routes';
import NotFound from './pages/not-found/NotFound';
import { theme } from './theme/theme';

function App() {

	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Routes>
						{
							PublicRoutes.map((route, index) =>
							(
								<Route key={index} path={route.path} element={route.element} />
							))
						}
						{
							PrivateRoute.map((route, index) => (
								<Route key={index} path={route.path} element={route.element} />
							))
						}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
