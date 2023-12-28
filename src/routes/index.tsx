import { Route, Routes } from "react-router-dom";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Working</div>} />
    </Routes>
  );
};

export default index;
