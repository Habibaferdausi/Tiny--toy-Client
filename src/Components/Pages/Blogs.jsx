import React from "react";

const Blogs = () => {
  return (
    <div className="bg-gray-100 mb-7 min-h-screen">
      <div className="bg-gray-100 py-5">
        <div className="container pt-10 lg:pt-20 text-center mx-auto">
          <h2 className="text-2xl lg:text-4xl  pt-10 lg:ms-20 text-red-500 font-bold">
            Welcome <span className="text-yellow-500">to</span> <br />
            <span className="text-purple-600 mt-4 text-3xl lg:text-5xl">
              {" "}
              My <span className="text-blue-400">Blog Page</span>
            </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              What is an access token and refresh token?
            </h2>
            <p className="text-gray-600">
              An access token is a short-lived, temporary token that is used to
              authenticate a user to a service. A refresh token is a long-lived
              token that can be used to request a new access token when the old
              one expires. Access tokens are typically stored in the browser's
              local storage or session storage. Refresh tokens should be stored
              securely, such as in a password manager or in an encrypted file.
              Access tokens and refresh tokens work together to provide a more
              secure way to authenticate users to a service. Access tokens are
              used to access protected resources, while refresh tokens are used
              to request new access tokens when the old one expires. This
              prevents users from having to re-authenticate every time they
              access a protected resource.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Compare SQL and NoSQL databases?
            </h2>
            <p className="text-gray-600">
              SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
              are two types of database management systems with different
              approaches: SQL databases are based on the relational model and
              use structured tables with predefined schemas, supporting ACID
              (Atomicity, Consistency, Isolation, Durability) transactions. They
              are ideal for complex relationships between entities and data
              integrity. NoSQL databases, on the other hand, are non-relational
              databases that provide flexible schemas, allowing for dynamic and
              unstructured data. They scale horizontally and are suitable for
              handling large amounts of unstructured data with high availability
              requirements. Choosing between SQL and NoSQL databases depends on
              factors like data structure, scalability, and the specific
              requirements of your application.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              What is Express.js?
            </h2>
            <p className="text-gray-600">
              Express.js is a popular web application framework for Node.js. It
              provides a simple and minimalist approach to building web servers
              and APIs. With its robust set of features, Express.js allows
              developers to handle HTTP requests and responses, define routes,
              and implement middleware for various functionalities like
              authentication, logging, error handling, and more. Express.js is
              known for its flexibility, performance, and extensive ecosystem of
              middleware and plugins that make web development efficient and
              scalable.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              What is Nest.js?
            </h2>
            <p className="text-gray-600">
              Nest.js is a progressive Node.js framework for building efficient
              and scalable server-side applications. It is built with TypeScript
              and uses modern JavaScript features to provide a highly modular
              and structured approach to application development. Nest.js
              leverages decorators, dependency injection, and a powerful module
              system to help developers build scalable and maintainable
              applications. It is inspired by Angular's architecture and applies
              similar concepts such as modules, controllers, services, and
              providers to organize application code and facilitate development.
              Nest.js aims to provide a productive and enjoyable development
              experience while maintaining performance and scalability for
              enterprise-grade applications.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p className="text-gray-600">
              MongoDB aggregate is a feature of MongoDB that allows you to
              perform complex queries on your data. Aggregate queries use a
              pipeline of stages to process your data. Each stage in the
              pipeline performs a specific operation on the data. The most
              common aggregate stages are: $match: This stage filters the data
              based on a condition. $project: This stage projects the data by
              selecting specific fields or by transforming the data. $group:
              This stage groups the data by a common value. $sort: This stage
              sorts the data by a specific field. $limit: This stage limits the
              number of documents returned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
