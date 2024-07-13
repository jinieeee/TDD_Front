import { format } from 'date-fns';
import TextContents from '../atoms/textContents';

const BoardContainer = ({ item }) => {
  return (
    <div className="items-center gap-x-4 text-xs w-full">
      <div className="group relative flex justify-between items-center space-x-4">
        <h4 className="mt-4 text-lg font-bold text-black">{item.title}</h4>
        <time className="text-gray-500">
          {format(item.sysRegDtime, 'yyyy.MM.dd')}
        </time>
      </div>
      <TextContents contents={item.contents}></TextContents>
      <div className="mt-5">작성자 : {item.username}</div>
    </div>
  );
};

export default BoardContainer;
