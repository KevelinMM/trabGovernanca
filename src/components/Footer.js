export default function Footer() {
  return (
    <footer className="bg-primary-white text-center lg:text-left text-base w-full bottom-0 fixed ">
      <div className="text-gray-700 text-center p-3 flex justify-center ">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <p className="text-blue-500 hover:text-blue-700 ">{" Saboarte"}</p>
      </div>
    </footer>
  );
}
