import { IHandleIcon } from '../../types/icon';

export default function HandleIcon({ icon }: { icon: IHandleIcon }) {
  return (
    <div className="transition:all mx-1 center" onClick={icon.handle}>
      <div
        className={'rounded-3xl p-[5px] relative w-12 h-12 ' + icon.more_class}
      >
        <img
          src={icon.image_url}
          className="abs-center hover:w-7 hover:h-7 transition-all w-6 h-6"
          alt=""
        />
      </div>
    </div>
  );
}
