export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aspernatur inventore corporis sed quos, eum eos illum. Beatae libero omnis ipsam tempore nam, alias, quia error, dolor placeat expedita sint!',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aspernatur inventore corporis sed quos, eum eos illum. Beatae libero omnis ipsam tempore nam, alias, quia error, dolor placeat expedita sint!',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aspernatur inventore corporis sed quos, eum eos illum. Beatae libero omnis ipsam tempore nam, alias, quia error, dolor placeat expedita sint!',
            picture: null,
        },
    ]
})