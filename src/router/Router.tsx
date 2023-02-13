import useStore from "../hooks/useStore";
import Home from "../pages/home";
import RouterList from "./router.data";

const Router = () => {
	const {
		route: { value },
	} = useStore();
	console.log(value);

	const match = RouterList.filter((item) => {
		return item.name === value;
	});

	return match.length > 0 ? (
		match.map((item, index) => {
			return <item.comp key={index} />;
		})
	) : (
		<Home />
	);
};

export default Router;
