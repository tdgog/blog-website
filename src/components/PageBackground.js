function ColourBackground({ colour1, colour2, colour3, colour4, colour5, colour6, mirror }) {
    const Top = () => <>
        <div className={`stripe-base ${colour1} z-1 -skew-x-[45deg]`} />
        <div className={`stripe-base ${colour2} z-10 -translate-x-[100px] -skew-x-[45deg]`} />
        <div className={`stripe-base ${colour3} z-30 -translate-x-[200px] -skew-x-[45deg]`} />
        <div className={`stripe-base bg-zinc-700 z-40 -translate-x-[300px] -skew-x-[45deg]`} />
    </>

    const Bottom = () => {
        if(mirror) {
            return <>
                <div className={`stripe-base ${colour1} z-2 skew-x-[45deg]`} />
                <div className={`stripe-base ${colour2} z-20 -translate-x-[100px] skew-x-[45deg]`} />
                <div className={`stripe-base ${colour3} z-30 -translate-x-[200px] skew-x-[45deg]`} />
                <div className={`stripe-base bg-zinc-700 z-40 -translate-x-[300px] skew-x-[45deg]`} />
            </>
        }
        return <>
            <div className={`stripe-base ${colour4} z-2 skew-x-[45deg]`} />
            <div className={`stripe-base ${colour5} z-20 -translate-x-[100px] skew-x-[45deg]`} />
            <div className={`stripe-base ${colour6} z-30 -translate-x-[200px] skew-x-[45deg]`} />
            <div className={`stripe-base bg-zinc-700 z-40 -translate-x-[300px] skew-x-[45deg]`} />
        </>
    }

    return <>
        <Top />
        <Bottom />
        <div className='stripe-base bg-transparent z-40 -translate-x-[300px] -skew-x-[45deg]' />
    </>
}

export default function PageBackground({ children }) {
    return <div className='w-full h-screen overflow-x-hidden'>
        <div className='relative z-50'>
            {children}
        </div>

        <div className='fixed top-0 w-screen h-screen -z-50 bg-zinc-700'>
            <ColourBackground
                // colour1='bg-[#6CAE75]'
                // colour2='bg-[#FC7A1E]'
                // colour3='bg-[#C5D5E4]'
                colour1='bg-[#BE3A34]'
                colour2='bg-[#046A38]'
                colour3='bg-[#FFB81C]'
                mirror
            />
        </div>
    </div>
}
