import React, { useEffect } from "react";
import Hearder from "../components/Hearder";
import BlogContent from "../components/BlogContent";
import BlogHearder from "../components/BlogHearder";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const BlogPage = () => {
  const [posts, setPosts] = React.useState([]);
  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/post`
      );
      setPosts(res.data?.data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <Hearder></Hearder>
      <BlogHearder title={"Blog"}></BlogHearder>
      <BlogContent text={"Cẩm nang du lịch"} data={posts}></BlogContent>
      {/* <BlogContent data={data2}></BlogContent> */}
      {/* <BlogContent text={"Đặc sản Việt Nam"} data={data3}></BlogContent>
      <BlogContent data={data4}></BlogContent> */}
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
