import React, { useEffect } from 'react';
//import CountdownTimer from './components/LandingPages/Home/Countdown/Countdown'; // Added import for timer
import { Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/LandingPages/Preloader/Preloader';
import Spinner from './components/DashBoard/Spinner/Spinner';
import { Suspense } from 'react';
import Footer from './components/LandingPages/Footer/footernew.js';
import ReactGA from 'react-ga';
import InitializeReactGA from './helper/googleAnalytics.ts';
import NotFound from './components/LandingPages/NotFound/NotFound';
// import { Carousel } from 'react-responsive-carousel';
import ShowTable from './components/LandingPages/UserData/ShowTable';
import ShowallTable from './components/LandingPages/UserData/ShowallTable';
// import Shedule from
import ComingSoon from './components/LandingPages/ComingSoon/ComingSoon.js';
// import { AllGameFixtures } from './components/LandingPages/UserData/AllGameFixtures';

const LandingPages = React.lazy(() =>
  import('./components/LandingPages/LandingPages')
);
const DashBoard = React.lazy(() =>
  import('./components/DashBoard/MainMenu/DashBoard')
);
const About = React.lazy(() => import('./components/LandingPages/About/AboutNew'));
// const CamAmb = React.lazy(() =>
//   import('./components/LandingPages/Camp_Amb/CamAmb')
// );
//const Events = React.lazy(() =>
//  import('./components/LandingPages/Events/Events')
//);
const Admin = React.lazy(() => import('./components/DashBoard/Admin/Admin'));
//const Team = React.lazy(() => import('./components/LandingPages/Team/Team'));
const Sponsors = React.lazy(() =>
  import('./components/LandingPages/Sponsors/Sponsors')
);
const Gallery = React.lazy(() =>
  import('./components/LandingPages/Gallery/Gallery')
);
const Guests = React.lazy(() =>
  import('./components/LandingPages/Guests/Guests')
);
const Register = React.lazy(() =>
  import('./components/LandingPages/Register/Register')
);
const Signup = React.lazy(() =>
  import('./components/LandingPages/Register/Signup/Signup')
);
const Login = React.lazy(() =>
  import('./components/LandingPages/Register/Login/Login')
);
const PrivacyPolicy = React.lazy(() =>
  import('./components/LandingPages/PrivacyPolicy/PrivacyPolicy')
);
const Forgot = React.lazy(() =>
  import('./components/LandingPages/Register/Forgot/Forgot')
);
const Reset = React.lazy(() =>
  import('./components/LandingPages/Register/Reset/Reset')
);
const Verify = React.lazy(() =>
  import('./components/LandingPages/Register/Verify/Verify')
);
const Home = React.lazy(() => import('./components/DashBoard/Home/Home'));
const Registration = React.lazy(() =>
  import('./components/DashBoard/Registration/Registration')
);
const Document = React.lazy(() =>
  import('./components/DashBoard/Document/Document')
);

const Profile = React.lazy(() =>
  import('./components/DashBoard/Profile/Profile')
);
const ContingentEdit = React.lazy(() =>
  import('./components/DashBoard/Registration/ContingentEdit/ContingentEdit')
);
const EventsEdit = React.lazy(() =>
  import('./components/DashBoard/Registration/Events/EventsEdit/EventsEdit')
);
const HomePage = React.lazy(() =>
  import('./components/LandingPages/Home/HomePage/Home')
);

//const Footer1 = React.lazy(() =>
  //import('./components/LandingPages/Contact/Contact.js')
//);

//const Matches = React.lazy(() =>
  //import('./components/LandingPages/matches/matches')
//);

//const Espardha = React.lazy(() =>
  //import('./components/LandingPages/Espardha/Espardha')
//);

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    InitializeReactGA(ReactGA);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}

function App() {
  usePageViews();
  return (
    <>
      {/* <Router> */}
      <Routes className="routes" style={{ overflowX: 'hidden' }}>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <LandingPages />{' '}
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <HomePage />
                {/*<CountdownTimer /> */} {/* Added timer component here */}
                <Footer />
              </Suspense>
            }
          />
          <Route
            path=""
            element={
              <Suspense fallback={<Preloader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Preloader />}>
                <Register />
              </Suspense>
            }
          >
            <Route
              exact
              path="signup"
              element={
                <Suspense fallback={<Preloader />}>
                  <Signup />
                  {/* <ComingSoon/> */}
                </Suspense>
              }
            />
            <Route
              exact
              path="login"
              element={
                <Suspense fallback={<Preloader />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              exact
              path="forgot"
              element={
                <Suspense fallback={<Preloader />}>
                  <Forgot />
                </Suspense>
              }
            />
            <Route
              exact
              path="reset"
              element={
                <Suspense fallback={<Preloader />}>
                  <Reset />
                </Suspense>
              }
            />

            <Route
              exact
              path="verify"
              element={
                <Suspense fallback={<Preloader />}>
                  <Verify />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="about"
            element={
              <Suspense fallback={<Preloader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="espardha"
            element={
              <Suspense fallback={<Preloader />}>
                { /*<Espardha /> */ }
                { <ComingSoon/> }
                <Footer />
              </Suspense>
            }
          />
          
          {/* <Route
            path="events"
            element={
              <Suspense fallback={<Preloader />}>
                <Events />
                <Footer />
              </Suspense>
            }
          /> */}
          <Route
            path="PrivacyPolicy"
            element={
              <Suspense fallback={<Preloader />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          {/* <Route
            path="team"
            element={
              <Suspense fallback={<Preloader />}>
                <Team />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="matches"
            element={
              <Suspense fallback={<Preloader />}>
                <Matches />
                <Footer />
              </Suspense>
            }
          /> */}
          <Route
            path="guests"
            element={
              <Suspense fallback={<Preloader />}>
                <Guests />
              </Suspense>
            }
          />
          <Route
            path="sponsors"
            element={
              <Suspense fallback={<Preloader />}>
                <Sponsors />
                <Footer />
              </Suspense>
            }
          />
          {/* <Route
            path="ca"
            element={
              <Suspense fallback={<Preloader />}>
                <CamAmb />
              </Suspense>
            }
          /> */}
          <Route
            path="gallery"
            element={
              <Suspense fallback={<Preloader />}>
                <Gallery />
              </Suspense>
            }
          />
          {/*}
          <Route
            path="contactus"
            element={
              <Suspense fallback={<Preloader />}>
                <Footer1 />
                <Footer />
              </Suspense>
            }
          /> */}
        </Route>

        <Route
          path="admin"
          element={
            <Suspense fallback={<Preloader />}>
              <Admin />
              <Footer />
            </Suspense>
          }
        />
        <Route
          path="admin/showtable"
          element={
            <Suspense fallback={<Spinner />}>
              <ShowTable />
            </Suspense>
          }
        />

        {/* <Route
            path="admin/allgames"
            element={
              <Suspense fallback={<Spinner />}>
                <AllGameFixtures />
              </Suspense>
            }
          /> */}

        <Route
          path="admin/allusers"
          element={
            <Suspense fallback={<Spinner />}>
              <ShowallTable />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Preloader />}>
              <DashBoard />
              <Footer />
            </Suspense>
          }
        >
          <Route
            path="home"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="Document"
            element={
              <Suspense fallback={<Spinner />}>
                <Document />
              </Suspense>
            }
          />
          <Route
            path="registration"
            element={
              <Suspense fallback={<Spinner />}>
              <Registration />
              </Suspense>
            }
          />
          <Route
            path="contingentEdit"
            element={
              <Suspense fallback={<Spinner />}>
                <ContingentEdit />
              </Suspense>
            }
          />

          <Route
            path="events"
            element={
              <Suspense fallback={<Spinner />}>
                <EventsEdit />
              </Suspense>
            }
          />
          <Route
            path="Profile"
            element={
              <Suspense fallback={<Spinner />}>
                <Profile />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    
    </>
  );
}

export default App;