import { Dialog, Transition } from '@headlessui/react';
import { Fragment, createRef } from 'react';
import HandleIcon from '../components/footer/handle-icon';
// import { CheckIcon } from '@heroicons/react/outline'

export default function CreateForum({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (bool: boolean) => void;
}) {
  const imageInputRef = createRef<HTMLInputElement>();
  const videoInputRef = createRef<HTMLInputElement>();

  const handleImage = () => {
    imageInputRef.current?.click();
  };
  const handleVideo = () => {
    videoInputRef.current?.click();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-50  inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed z-40 inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom relative z-50 bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl  transform transition-all sm:my-8 sm:align-middle w-[675px] sm:p-6">
              <div>
                <div className="">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Create Forum
                  </Dialog.Title>
                  <hr className="w-full h-1 mt-2"></hr>
                  <div className="mt-2">
                    <div className="flex mt-2 mb-4">
                      <div className="center">
                        <img
                          src="https://picsum.photos/200"
                          className="w-12 h-12 rounded-3xl mr-2"
                          alt=""
                        />
                      </div>
                      <div className="center">
                        <div className="">
                          <div className="font-semibold">Justine Winata</div>
                          <div className="text-sm text-gray-500">Dokter</div>
                        </div>
                      </div>
                    </div>
                    <textarea
                      className="box-border align-top w-full h-40 p-3 text-lg text-gray-500 border-none focus:outline-none"
                      placeholder="Tuliskan kendala anda..."
                    />
                    <input
                      ref={imageInputRef}
                      type="file"
                      hidden
                      accept=".jpg"
                    />
                    <input
                      ref={videoInputRef}
                      type="file"
                      hidden
                      accept=".mp4"
                    />
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <div className="flex justify-between">
                  <div className="flex">
                    <HandleIcon
                      icon={{
                        image_url: '/assets/icon/video-96.png',
                        handle: handleImage,
                        more_class: 'bg-blue-100',
                      }}
                    />
                    <HandleIcon
                      icon={{
                        image_url: '/assets/icon/image-96.png',
                        handle: handleVideo,
                        more_class: 'bg-sky-100',
                      }}
                    />
                    <HandleIcon
                      icon={{
                        image_url: '/assets/icon/dipper-pines-96.png',
                        handle: handleVideo,
                        more_class: 'bg-orange-100',
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-1/4 center inline-flex justify-center rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-blue-700 border-blue-700 hover:text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
