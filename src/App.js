import React from "react";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import { Route, Routes } from "react-router-dom";
import TourPage from "./pages/TourPage";
import BookPage from "./pages/BookPage";
import PricePage from "./pages/PricePage";
import ManageTour from "./pages/admin/ManageTour";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import TourDetailPage from "./pages/TourDetailPage";
import Admin from "./layout/Admin";
import AddTour from "./pages/admin/AddTour";
import NotFound from "./pages/admin/NotFound";
import ManageTourInWeb from "./pages/admin/ManageTourInWeb";
import DashBoard from "./pages/admin/DashBoard";
import AddPost from "./pages/admin/AddPost";
import ManagePost from "./pages/admin/ManagePost";
import ManageMessage from "./pages/admin/ManageMessage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/intro" element={<Introduce></Introduce>}></Route>
        <Route path="/tour" element={<TourPage></TourPage>}></Route>
        <Route path="/book/:slug" element={<BookPage></BookPage>}></Route>
        <Route path="/price" element={<PricePage></PricePage>}></Route>
        <Route
          path="/:slug"
          element={<TourDetailPage></TourDetailPage>}
        ></Route>
        <Route path="/admin" element={<Admin></Admin>}>
          <Route path="manage" element={<ManageTour></ManageTour>}></Route>
          <Route
            path="manageInWeb"
            element={<ManageTourInWeb></ManageTourInWeb>}
          ></Route>
          <Route path="manage-post" element={<ManagePost></ManagePost>}></Route>

          <Route path="add-post" element={<AddPost></AddPost>}></Route>
          <Route path="edit-post/:id" element={<AddPost></AddPost>}></Route>
          <Route path="add-tour" element={<AddTour></AddTour>}></Route>
          <Route
            path="support"
            element={<ManageMessage></ManageMessage>}
          ></Route>
          <Route path="edit-tour/:id" element={<AddTour></AddTour>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>

        {/* <Home></Home> */}
        {/* <Introduce></Introduce> */}
      </Routes>
    </div>
  );
};

export default App;
