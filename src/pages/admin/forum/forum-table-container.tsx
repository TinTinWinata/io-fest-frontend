import { useEffect, useState } from 'react';
import useForum from '../../../hooks/use-forum';
import { EXAMPLE_FORUM, IForum } from '../../../types/forum';
import ForumRemoveModal from './forum-remove-modal';
import ForumTableSearch from './forum-search';
import ForumTable from './forum-table';

export default function ForumTableContainer() {
  // const [filter, setFilter] = useState<>();
  const { data, remove } = useForum();
  const [currForums, setCurrForums] = useState<IForum[]>([]);
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const [selectedForum, setSelectedForum] = useState<IForum>(EXAMPLE_FORUM);
  const [searchText, setSearchText] = useState<string>('');

  const handleRemoveUserButton = (forum: IForum) => {
    setSelectedForum(forum);
    setOpenRemoveModal(true);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const checkSearch = () => {
    if (searchText == '') {
      setCurrForums(data);
    } else {
      const filteredSearch = getSearchData(data, searchText);
      setCurrForums(filteredSearch);
    }
  };

  const getSearchData = (datas: IForum[], searchText: string) => {
    return datas.filter(
      (forum) =>
        forum.title.toLowerCase().includes(searchText.toLowerCase()) ||
        forum.description.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => checkSearch(), [searchText]);
  useEffect(() => setCurrForums(data), [data]);

  if (data)
    return (
      <>
        <ForumTableSearch handleSearch={handleSearch} />
        <ForumRemoveModal
          remove={remove}
          forum={selectedForum}
          open={openRemoveModal}
          setOpen={setOpenRemoveModal}
        />
        <ForumTable
          handlerRemoveForumButton={handleRemoveUserButton}
          forums={currForums}
        />
      </>
    );
  else return <></>;
}
