import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Movies from './component/screens/movies/Movie';
import Series from './component/screens/series/Series'
import UseRedcuerIncrrementDecrement from './useReducer/UseRedcuerIncrrementDecrement';
import CallBack from './callback-promise/Callback';
import PromiseExample from './callback-promise/PromiseExample';
import AsyncWait from './callback-promise/AsyncWait';
import PromiseUsingFetch from './callback-promise/PromiseUsingFetch';
import FetchDataUsingAxios from './callback-promise/FetchDataUsingAxios';
import { Fragment } from 'react/cjs/react.development';
import Header from './component/common/header/Header';
import DetailPage from './component/screens/detailPage/DetailPage';

function Controller() {
    return (
        <div>
            <BrowserRouter >
                <Header />
                <Switch>
                    <Route exact path="/" render={() => <Movies />} />
                    <Route path="/movie/:movieId" render={() => <DetailPage />} />
                    <Route path="/series" render={() => <Series />} />
                    <Route exact path="/axios" render={() => <FetchDataUsingAxios />} />
                    <Route exact path="/promise-using-fetch" render={() => <PromiseUsingFetch />} />
                    <Route exact path="/async-wait" render={() => <AsyncWait />} />
                    <Route exact path="/promise-example" render={() => <PromiseExample />} />
                    <Route exact path="/callback" render={() => <CallBack />} />
                    <Route exact path="/use-reducer" render={() => <UseRedcuerIncrrementDecrement />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Controller

// function test() {
//     return (
//         <Fragment>
//             <div>
//                 test 1
//             </div>
//             <div>
//                 test2
//             </div>
//         </Fragment>
//     )
// }


// function test1() {
//     return (
//         <>
//             <div>
//                 test 1
//             </div>
//             <div>
//                 test2
//             </div>
//         </>
//     )
// }