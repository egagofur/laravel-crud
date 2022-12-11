import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
  const { data, setData, errors, post } = useForm({
    hari: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route("posts.store"));
  }

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Create Post
        </h2>
      }
    >
      <Head hari="Posts" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <Link
                  className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                  href={route("posts.index")}
                >
                  Back
                </Link>
              </div>

              <form name="createForm" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <label className="">Hari</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2"
                      label="hari"
                      name="hari"
                      value={data.hari}
                      onChange={(e) => setData("hari", e.target.value)}
                    />
                    <span className="text-red-600">{errors.hari}</span>
                  </div>
                  <div className="mb-0">
                    <label className="">Kegiatan</label>
                    <textarea
                      type="text"
                      className="w-full rounded"
                      label="kegiatan"
                      name="kegiatan"
                      errors={errors.kegiatan}
                      value={data.kegiatan}
                      onChange={(e) => setData("kegiatan", e.target.value)}
                    />
                    <span className="text-red-600">{errors.kegiatan}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
