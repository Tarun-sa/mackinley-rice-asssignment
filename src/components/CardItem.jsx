import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutlineIcon } from "@heroicons/react/24/outline";

const CardItem = ({
  image,
  title,
  company,
  appeal,
  skills,
  review,
  bookmark,
}) => {
  const [save, setSave] = useState(bookmark);

  const handleSaveClick = () => {
    setSave((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <Card className="w-full h-200 max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt="ui/ux review check" />
        <div className="saveIconBackground">
          <IconButton
            size="sm"
            color="white"
            variant="text"
            className="!absolute top-4 right-4 opacity-70 "
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "#323438",
              borderRadius: "4px",
            }}
            onClick={handleSaveClick}
          >
            {save ? (
              <BookmarkSolidIcon className="h-3 w-3 opacity-100 icon" />
            ) : (
              <BookmarkOutlineIcon className="h-3 w-3 opacity-100 icon" />
            )}
          </IconButton>
        </div>
      </CardHeader>
      <CardBody>
        <div className="section-1">
          <Typography variant="h4" color="black" className="font-bold">
            {title}
          </Typography>
          <div className="flex overflow-x-auto">
            <span className="whitespace-nowrap overflow-ellipsis truncate">
              {skills.map((skill, index) => (
                <span key={index} className="font-small">
                  {index > 0 && ", "}
                  {skill}
                </span>
              ))}
            </span>
          </div>
        </div>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="section-2">
          <div className="flex gap-5">
            <img src={company.logo} alt="companyImage" />
            <Typography variant="h5" color="black">
              {company.name}
            </Typography>

            <div className="flex gap-1.5">
              {company.grade > 0.0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 "
                  color="green"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              )}

              <span>{company.grade}</span>
            </div>
            <span>{`(${company.grade_count})`}</span>
          </div>
          <Typography
            className="flex items-center gap-1.5 font-normal my-2"
          >
            {appeal}
          </Typography>
        </div>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="section-3">
          <Typography variant="h6" color="black" className="font-bold">
            {review}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};
export default CardItem;
