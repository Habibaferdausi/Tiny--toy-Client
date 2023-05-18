import React from "react";

const UpdateModal = (props) => {
  const { handleUpdate } = props;
  return (
    <div>
      <div
        className="modal modal-bottom sm:modal-middle"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
          <h1
            className="text-center w-100 m-auto"
            id="contained-modal-title-vcenter"
          >
            Update Job
          </h1>
        </label>
        <div className="modal-box relative">
          <form className="container text-center">
            Price:
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={props?.toy?.price}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input className="submit-btn" value="Update Toy" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
