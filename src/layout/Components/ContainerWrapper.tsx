function ContainerWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="container-wrapper w-[80%] mx-auto h-full">
            {children}
        </div>
    );
}

export default ContainerWrapper;