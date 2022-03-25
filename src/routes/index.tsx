import { FunctionComponent } from "react";
import Book from "../components/Book";
import BookList from "../components/BookList";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";
import Detail from "../pages/Detail";
// imp
interface AppRoutesProps {

}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
    return (
        <Router>

            <Routes>
                <Route path="/books/:id" element={<Layout childNode={<Detail />}></Layout>} />
                <Route path="/books" element={<Layout childNode={<div>Alo</div>}></Layout>} />
                <Route path="/" element={<Layout childNode={<Home />}></Layout>} />
            </Routes>



        </Router>
    );
}

export default AppRoutes;