import { useParams } from 'react-router-dom';
import BoardLayout from '../../components/common/BoardLayout';
import { useEffect, useState } from 'react';
import restApi from '../../api/restApi';
import BoardContainer from '../../components/molecules/boardContainer';

const BoardList = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const boardList = async () => {
    try {
      const { data } = await restApi('get', `/group/${params.groupId}`);
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    boardList();
  }, []);

  if (loading || data == null) {
    return null;
  } else {
    return (
      <BoardLayout>
        {data.map((item) => (
          <article
            key={item.boardId}
            className="flex border border-gray-300 rounded-md p-4 mb-5"
          >
            <BoardContainer item={item}></BoardContainer>
          </article>
        ))}
      </BoardLayout>
    );
  }
};

export default BoardList;
