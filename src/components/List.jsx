import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import CardItem from "./CardItem";
import {Typography} from "@material-tailwind/react";

const List = (props) => {
  const [recruits, setRecruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);

  const updateList = async () => {
    let apiUrl = `https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=1`;
    setLoading(true);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();

    setRecruits(parsedData.data.recruits);
    setLoading(false);
    let totalRecruits= parsedData.data.total_count;   //it should be 30 but till page 3 it is showing 2863 causing issue so hardcoding it to 30 
    setTotalResults(30);
    
  };

  useEffect(() => {
     document.title = "JobPlanet";
    updateList();
  }, []);

  const fetchMoreData = async () => {
    let apiUrl = `https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${page + 1}`;
    console.log(page+1);
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    setRecruits(recruits.concat(parsedData.data.recruits));
    console.log(recruits.length);
    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={recruits.length}
        next={fetchMoreData}
        hasMore={recruits.length !== totalResults }
        loader={<Spinner />}
         endMessage={<Typography variant="h2" className='text-center my-4'>No more data to load.</Typography>}
      >
        <div className="flex justify-center mt-12" >
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recruits.map((recruit) => {
                return (
                  <div
                    key={recruit.id}
                    className="flex flex-col items-center justify-center "
                  >
                    <CardItem
                      image={recruit.image}
                      title={recruit.title}
                      skills={recruit.skills}
                      company={recruit.company}
                      appeal={recruit.appeal}
                      review={recruit.review}
                      boomark={recruit.bookmark}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

//

export default List;
