

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-xl font-bold pb-1 mb-3 border-b-2">
            {children}
        </p>
    )
}

export default Title
