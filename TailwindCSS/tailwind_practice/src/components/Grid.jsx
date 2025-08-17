function Grid(){
    return(
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-40">
            <div className="bg-blue-200">1</div>
  <div className="bg-blue-300">2</div>
  <div className="bg-blue-400">3</div>
  <div className="bg-blue-500">4</div>
        </div>
    );
}
export default Grid;