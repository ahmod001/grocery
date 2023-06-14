const PageNotFound = () => {
    // Scrolling Bug Fixed
    window.scroll({ top: 0 });

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-2">404</h1>
            <h1 className="text-lg font-normal">Page Not Found</h1>

        </div>
    );
};

export default PageNotFound;
