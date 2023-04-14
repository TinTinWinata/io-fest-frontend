import SimpleButton from '../../components/simpleButton';

export default function Home() {
  return (
    <div className="">
      {/* <div className="bg-black absolute w-full h-full opacity-[60%]"></div> */}
      <div className="w-full h-screen center">
        <div className="w-3/4 text-center">
          <h1 className="font-semibold text-3xl">
            DIABETES SUDAH MEMAKAN BANYAK KORBAN. APAKAH KAMU SALAH SATUNYA ?
          </h1>
          <div className="center">
            <SimpleButton
              moreClass="mt-3 text-2xl py-4 px-3"
              text="Yuk Cari Tahu"
            ></SimpleButton>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
