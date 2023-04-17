export default function SidebarButton({ handler }: { handler: () => void }) {
  return (
    <div className="absolute right-0 top-[50%] translate-y-[-50%] translate-x-[25%]">
      <div
        onClick={handler}
        className="cursor-pointer relative rounded-full bg-blue-500 dark:bg-orange-500 w-20 h-20"
      >
        {/* <HandleIcon
          icon={{ handle: handler, image_url: '/assets/icon/person-96.png' }}
        /> */}
      </div>
    </div>
  );
}
