
import Image from "next/image";
import Link from "next/link";
import { IoTimeOutline } from "react-icons/io5";

const NewsList = ({ latest }) => {
  function timeAgo(date) {
    const currentDate = new Date();
    const targetDate = new Date(date);

    const timeDifference = currentDate - targetDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.35); // Approximate value for months
    const years = Math.floor(months / 12);

    if (years > 0) {
      return years === 1 ? "A year ago" : `${years} years ago`;
    } else if (months > 0) {
      return months === 1 ? "A month ago" : `${months} months ago`;
    } else if (weeks > 0) {
      return weeks === 1 ? "A week ago" : `${weeks} weeks ago`;
    } else if (days > 0) {
      return days === 1 ? "A day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "An hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "A minute ago" : `${minutes} minutes ago`;
    } else {
      return "just now";
    }
  }
  // Example usage:
  // const targetDate = '2022-01-01T12:30:00Z'; // Replace this with your date string
  


  return (
    <>
      {latest.data.length > 0 ?
        latest.data.map((item) => {
          const postTime = timeAgo(item.createdAt)
          return(
          <div key={item.id} className="scroll-animation-container">
            <div className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden">
              <Link href="#">
                <Image className="rounded-t-lg h-[220px] object-cover" width={400} height={400} src={item.img1} alt="Posts image" />
              </Link>
              <div className="p-5">
                <Link href={`/details?id=${item.id}`}>
                  <h5  className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {item.title.length > 45 ? (<span>{item.title.slice(0, 45)}...</span>): item.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-400">
                  {item.short_des.length > 300 ? (<span>{item.short_des.slice(0, 300)}....</span>): item.short_des}
                </p>
                <div className="flex justify-between">
                  <Link
                    href={`/details?id=${item.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                  <span className="mb-3 font-normal text-gray-400 text-center flex items-center gap-1">
                  <IoTimeOutline/><span>{postTime}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
)})
: <h1 className="text-6xl text-red-500 w-screen">No Post Here!!!</h1>
}
    </>
  );
};

export default NewsList;
