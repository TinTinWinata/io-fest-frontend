export default function SidebarBottom() {
  return (
    <div className="leading-none text-center absolute bottom-0 right-0 h-20 w-full bg-blue-600 dark:bg-orange-600 rounded-br-xl">
      <div className="flex absolute top-[50%] translate-y-[-50%] left-2">
        <div className="center mr-2">
          <img
            src="https://picsum.photos/200"
            className="w-9 h-9 rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <div className="center">
            <div className="text-gray-50 text-sm font-semibold align-bottom">
              Justine
            </div>
            <div className="ml-2 text-gray-300 text-sm font-medium align-top">
              ( dokter )
            </div>
          </div>
          <p className="text-gray-50 text-sm text-left font-semibold cursor-pointer hover:underline">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}