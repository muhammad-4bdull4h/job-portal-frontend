import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import useGetQueriedJobs from "@/hooks/useGetQueriedJobs";
import { Input } from "./ui/input";
import { setsearchQuery } from "@/store/jobSlice";

function Browse({ URL }) {
  useGetQueriedJobs(URL);
  const { queryjobs } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <Input
            onChange={(e) => dispatch(setsearchQuery(e.target.value))}
            className="w-fit"
            placeholder="Search"
          />
        </div>
        <h1 className="font-bold my-10 text-xl ">
          Search results ({queryjobs.length})
        </h1>
        {queryjobs?.length === 0 ? (
          <p className="text-center">No results found</p>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {queryjobs.map((job) => {
              return <Card job={job} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Browse;
