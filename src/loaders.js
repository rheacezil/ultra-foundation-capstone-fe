import Skeleton from "react-loading-skeleton";

export const renderLoading = () => {
  return (
    <div className="row g-3">
      <div className="col-md-4">
        <Skeleton height={350} />
      </div>
      <div className="col-md-4">
        <Skeleton height={350} />
      </div>
      <div className="col-md-4">
        <Skeleton height={350} />
      </div>
      <div className="col-md-4">
        <Skeleton height={350} />
      </div>
      <div className="col-md-4">
        <Skeleton height={20} />
      </div>
      <div className="col-md-4">
        <Skeleton height={20} />
      </div>
      <div className="col-md-4">
        <Skeleton height={10} />
      </div>
      <div className="col-md-4">
        <Skeleton height={10} />
      </div>
      <div className="col-md-4">
        <Skeleton height={10} />
      </div>
    </div>
  );
};
