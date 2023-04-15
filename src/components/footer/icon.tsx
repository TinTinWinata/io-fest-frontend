import { IIcon } from '../../types/icon';

export default function Icon({ icon }: { icon: IIcon }) {
  return (
    <a className="transition:all mx-1 center" href={icon.click_url}>
      <div
        className={'rounded-lg p-[5px] relative w-10 h-10 ' + icon.more_class}
      >
        <img
          src={icon.image_url}
          className="abs-center hover:w-7 hover:h-7 transition-all w-6 h-6"
          alt=""
        />
      </div>
    </a>
  );
}
