const Container = ({ children, style }) => {
    return (
        <div className={`mx-auto max-w-[1260px] px-5 md:px-10 w-full flex items-start ${style} `}>
            {children}
        </div>
    );
};
export default Container;
