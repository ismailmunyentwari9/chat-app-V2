import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col h-screen'>
			<header className='w-full text-white p-4'>
				<h1 className='text-2xl font-semibold text-center'>ChatApp</h1>
			</header>
			<div className='flex flex-col sm:flex-row flex-grow rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<Sidebar className="w-full sm:w-1/4" />
				<MessageContainer className="flex-grow w-full sm:w-3/4" />
			</div>
		</div>
	);
};
export default Home;
