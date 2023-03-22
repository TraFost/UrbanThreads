import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700" />
        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700" />
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
