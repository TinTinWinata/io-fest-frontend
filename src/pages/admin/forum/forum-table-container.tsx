import { useEffect, useState } from 'react';
import useForum from '../../../hooks/use-forum';
import { EXAMPLE_FORUM, IForum } from '../../../types/forum';
import ForumRemoveModal from './forum-remove-modal';
import ForumTableSearch from './forum-search';
import ForumTable from './forum-table';

export default function ForumTableContainer() {
  // const [filter, setFilter] = useState<>();
  const { remove, getAllData } = useForum();
  const [currForums, setCurrForums] = useState<IForum[]>([]);
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const [selectedForum, setSelectedForum] = useState<IForum>(EXAMPLE_FORUM);
  const [searchText, setSearchText] = useState<string>('');
  const [data, setData] = useState<IForum[]>([]);

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

  const fetchData = async () => {
    setData(await getAllData());
  };

  const removeProxy = async (forumId: string) => {
    await remove(forumId);
    await fetchData();
  };

  useEffect(() => checkSearch(), [searchText]);
  useEffect(() => setCurrForums(data), [data]);
  useEffect(() => {
    fetchData();
  }, []);

  if (data)
    return (
      <div className="p-2">
        <div className="p-1 mb-1">
          <ForumTableSearch handleSearch={handleSearch} />
        </div>
        <ForumRemoveModal
          remove={removeProxy}
          forum={selectedForum}
          open={openRemoveModal}
          setOpen={setOpenRemoveModal}
        />
        <ForumTable
          handlerRemoveForumButton={handleRemoveUserButton}
          forums={currForums}
        />
      </div>
    );
  else return <></>;
}
