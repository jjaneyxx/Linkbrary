const Card = () => {
  return (
    <div className="flex h-[334px] w-[340px] flex-col rounded-[15px] border">
      <div className="h-[200px] flex-shrink-0 rounded-t-[15px] bg-purple-100">이미지</div>
      <div className="flex-1 rounded-b-[15px] px-5 py-[15px]">링크 정보</div>
    </div>
  );
};
export default Card;
