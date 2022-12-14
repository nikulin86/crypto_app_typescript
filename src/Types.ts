export interface ICoins {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    roi?: any;
    last_updated: Date;
    price_change_percentage_24h_in_currency: number;
}

export interface HistoricalChart {
    prices: number[][];
}


export interface RootObjectCoin {
    id: string;
    // days: number;
    // symbol: string;
    name: string;
    // asset_platform_id: string;
    // platforms: string;
    // detail_platforms: string;
    // block_time_in_minutes: number;
    // hashing_algorithm?: any;
    // categories: string[];
    // public_notice?: any;
    // additional_notices: any[];
    // localization: Localization;
    description: Description;
    // links: Links;
    image: Image;
    // country_origin: string;
    // genesis_date?: any;
    // contract_address: string;
    // sentiment_votes_up_percentage: number;
    // sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    // coingecko_rank: number;
    // coingecko_score: number;
    // developer_score: number;
    // community_score: number;
    // liquidity_score: number;
    // public_interest_score: number;
    market_data: MarketData;
    // community_data: CommunityData;
    // developer_data: DeveloperData;
    // public_interest_stats: PublicInterestStats;
    // status_updates: any[];
    // last_updated: Date;
    // tickers: Ticker[];
}
//     export interface Platforms {
//         ethereum: string;
//         polygon-pos: string;
//         huobi-token: string;
//         binance-smart-chain: string;
//         solana: string;
//         iotex: string;
//         arbitrum-one: string;
//         kucoin-community-chain: string;
//         okex-chain: string;
//         moonriver: string;
//         optimistic-ethereum: string;
//         aurora: string;
//         boba: string;
//         metis-andromeda: string;
//         cronos: string;
//         fuse: string;
//         meter: string;
//         kardiachain: string;
//         tomochain: string;
//         harmony-shard-0: string;
//         fantom: string;
//         moonbeam: string;
//         telos: string;
//         syscoin: string;
//         tron: string;
//         milkomeda-cardano: string;
//         conflux: string;
//         astar: string;
//         avalanche: string;
//         kava: string;
//         bitgert: string;
//         canto: string;
//         xdai: string;
//         ethereumpow: string;
//         velas: string;
//         near-protocol: string;
//     }

    
//     export interface DetailPlatforms {
//         ethereum: Ethereum;
//         polygon-pos: PolygonPos;
//         huobi-token: HuobiToken;
//         binance-smart-chain: BinanceSmartChain;
//         solana: Solana;
//         iotex: Iotex;
//         arbitrum-one: ArbitrumOne;
//         kucoin-community-chain: KucoinCommunityChain;
//         okex-chain: OkexChain;
//         moonriver: Moonriver;
//         optimistic-ethereum: OptimisticEthereum;
//         aurora: Aurora;
//         boba: Boba;
//         metis-andromeda: MetisAndromeda;
//         cronos: Cronos;
//         fuse: Fuse;
//         meter: Meter;
//         kardiachain: Kardiachain;
//         tomochain: Tomochain;
//         harmony-shard-0: HarmonyShard0;
//         fantom: Fantom;
//         moonbeam: Moonbeam;
//         telos: Telos;
//         syscoin: Syscoin;
//         tron: Tron;
//         milkomeda-cardano: MilkomedaCardano;
//         conflux: Conflux;
//         astar: Astar;
//         avalanche: Avalanche;
//         kava: Kava;
//         bitgert: Bitgert;
//         canto: Canto;
//         xdai: Xdai;
//         ethereumpow: Ethereumpow;
//         velas: Velas;
//         near-protocol: NearProtocol;
    
// }

export interface Description {
    en: string;
    // de: string;
    // es: string;
    // fr: string;
    // it: string;
    // pl: string;
    // ro: string;
    // hu: string;
    // nl: string;
    // pt: string;
    // sv: string;
    // vi: string;
    // tr: string;
    // ru: string;
    // ja: string;
    // zh: string;
    // // zh-tw: string;
    // ko: string;
    // ar: string;
    // th: string;
    // id: string;
    // cs: string;
    // da: string;
    // el: string;
    // hi: string;
    // no: string;
    // sk: string;
    // uk: string;
    // he: string;
    // fi: string;
    // bg: string;
    // hr: string;
    // lt: string;
    // sl: string;
}

export interface Localization {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    pl: string;
    ro: string;
    hu: string;
    nl: string;
    pt: string;
    sv: string;
    vi: string;
    tr: string;
    ru: string;
    ja: string;
    zh: string;
    // zh-tw: string;
    ko: string;
    ar: string;
    th: string;
    id: string;
    cs: string;
    da: string;
    el: string;
    hi: string;
    no: string;
    sk: string;
    uk: string;
    he: string;
    fi: string;
    bg: string;
    hr: string;
    lt: string;
    sl: string;
}





    export interface Ethereum {
        decimal_place: number;
        contract_address: string;
    }

    export interface PolygonPos {
        decimal_place: number;
        contract_address: string;
    }

    export interface HuobiToken {
        decimal_place: number;
        contract_address: string;
    }

    export interface BinanceSmartChain {
        decimal_place: number;
        contract_address: string;
    }

    export interface Solana {
        decimal_place: number;
        contract_address: string;
    }

    export interface Iotex {
        decimal_place?: any;
        contract_address: string;
    }

    export interface ArbitrumOne {
        decimal_place: number;
        contract_address: string;
    }

    export interface KucoinCommunityChain {
        decimal_place: number;
        contract_address: string;
    }

    export interface OkexChain {
        decimal_place: number;
        contract_address: string;
    }

    export interface Moonriver {
        decimal_place: number;
        contract_address: string;
    }

    export interface OptimisticEthereum {
        decimal_place: number;
        contract_address: string;
    }

    export interface Aurora {
        decimal_place: number;
        contract_address: string;
    }

    export interface Boba {
        decimal_place: number;
        contract_address: string;
    }

    export interface MetisAndromeda {
        decimal_place: number;
        contract_address: string;
    }

    export interface Cronos {
        decimal_place: number;
        contract_address: string;
    }

    export interface Fuse {
        decimal_place: number;
        contract_address: string;
    }

    export interface Meter {
        decimal_place: number;
        contract_address: string;
    }

    export interface Kardiachain {
        decimal_place: number;
        contract_address: string;
    }

    export interface Tomochain {
        decimal_place: number;
        contract_address: string;
    }

    export interface HarmonyShard0 {
        decimal_place: number;
        contract_address: string;
    }

    export interface Fantom {
        decimal_place: number;
        contract_address: string;
    }

    export interface Moonbeam {
        decimal_place: number;
        contract_address: string;
    }

    export interface Telos {
        decimal_place: number;
        contract_address: string;
    }

    export interface Syscoin {
        decimal_place: number;
        contract_address: string;
    }

    export interface Tron {
        decimal_place: number;
        contract_address: string;
    }

    export interface MilkomedaCardano {
        decimal_place: number;
        contract_address: string;
    }

    export interface Conflux {
        decimal_place: number;
        contract_address: string;
    }

    export interface Astar {
        decimal_place: number;
        contract_address: string;
    }

    export interface Avalanche {
        decimal_place: number;
        contract_address: string;
    }

    export interface Kava {
        decimal_place: number;
        contract_address: string;
    }

    export interface Bitgert {
        decimal_place: number;
        contract_address: string;
    }

    export interface Canto {
        decimal_place: number;
        contract_address: string;
    }

    export interface Xdai {
        decimal_place: number;
        contract_address: string;
    }

    export interface Ethereumpow {
        decimal_place?: any;
        contract_address: string;
    }

    export interface Velas {
        decimal_place: number;
        contract_address: string;
    }

    export interface NearProtocol {
        decimal_place?: any;
        contract_address: string;
    }






    export interface ReposUrl {
        github: any[];
        bitbucket: any[];
    }

    export interface Links {
        homepage: string[];
        blockchain_site: string[];
        official_forum_url: string[];
        chat_url: string[];
        announcement_url: string[];
        twitter_screen_name: string;
        facebook_username: string;
        bitcointalk_thread_identifier?: any;
        telegram_channel_identifier: string;
        subreddit_url?: any;
        repos_url: ReposUrl;
    }

    export interface Image {
        thumb: string;
        small: string;
        large: string;
    }

    export interface CurrentPrice {
        // aed: number;
        // ars: number;
        // aud: number;
        // bch: number;
        // bdt: number;
        // bhd: number;
        // bmd: number;
        // bnb: number;
        // brl: number;
        // btc: number;
        // cad: number;
        // chf: number;
        // clp: number;
        // cny: number;
        // czk: number;
        // dkk: number;
        // dot: number;
        // eos: number;
        // eth: number;
        // eur: number;
        // gbp: number;
        // hkd: number;
        // huf: number;
        // idr: number;
        // ils: number;
        // inr: number;
        // jpy: number;
        // krw: number;
        // kwd: number;
        // lkr: number;
        // ltc: number;
        // mmk: number;
        // mxn: number;
        // myr: number;
        // ngn: number;
        // nok: number;
        // nzd: number;
        // php: number;
        // pkr: number;
        // pln: number;
        rub: number;
        // sar: number;
        // sek: number;
        // sgd: number;
        // thb: number;
        // try: number;
        // twd: number;
        // uah: number;
        usd: number;
        // vef: number;
        // vnd: number;
        // xag: number;
        // xau: number;
        // xdr: number;
        // xlm: number;
        // xrp: number;
        // yfi: number;
        // zar: number;
        // bits: number;
        // link: number;
        // sats: number;
    }

    export interface Ath {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface AthChangePercentage {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface AthDate {
        aed: Date;
        ars: Date;
        aud: Date;
        bch: Date;
        bdt: Date;
        bhd: Date;
        bmd: Date;
        bnb: Date;
        brl: Date;
        btc: Date;
        cad: Date;
        chf: Date;
        clp: Date;
        cny: Date;
        czk: Date;
        dkk: Date;
        dot: Date;
        eos: Date;
        eth: Date;
        eur: Date;
        gbp: Date;
        hkd: Date;
        huf: Date;
        idr: Date;
        ils: Date;
        inr: Date;
        jpy: Date;
        krw: Date;
        kwd: Date;
        lkr: Date;
        ltc: Date;
        mmk: Date;
        mxn: Date;
        myr: Date;
        ngn: Date;
        nok: Date;
        nzd: Date;
        php: Date;
        pkr: Date;
        pln: Date;
        rub: Date;
        sar: Date;
        sek: Date;
        sgd: Date;
        thb: Date;
        try: Date;
        twd: Date;
        uah: Date;
        usd: Date;
        vef: Date;
        vnd: Date;
        xag: Date;
        xau: Date;
        xdr: Date;
        xlm: Date;
        xrp: Date;
        yfi: Date;
        zar: Date;
        bits: Date;
        link: Date;
        sats: Date;
    }

    export interface Atl {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface AtlChangePercentage {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface AtlDate {
        aed: Date;
        ars: Date;
        aud: Date;
        bch: Date;
        bdt: Date;
        bhd: Date;
        bmd: Date;
        bnb: Date;
        brl: Date;
        btc: Date;
        cad: Date;
        chf: Date;
        clp: Date;
        cny: Date;
        czk: Date;
        dkk: Date;
        dot: Date;
        eos: Date;
        eth: Date;
        eur: Date;
        gbp: Date;
        hkd: Date;
        huf: Date;
        idr: Date;
        ils: Date;
        inr: Date;
        jpy: Date;
        krw: Date;
        kwd: Date;
        lkr: Date;
        ltc: Date;
        mmk: Date;
        mxn: Date;
        myr: Date;
        ngn: Date;
        nok: Date;
        nzd: Date;
        php: Date;
        pkr: Date;
        pln: Date;
        rub: Date;
        sar: Date;
        sek: Date;
        sgd: Date;
        thb: Date;
        try: Date;
        twd: Date;
        uah: Date;
        usd: Date;
        vef: Date;
        vnd: Date;
        xag: Date;
        xau: Date;
        xdr: Date;
        xlm: Date;
        xrp: Date;
        yfi: Date;
        zar: Date;
        bits: Date;
        link: Date;
        sats: Date;
    }

    export interface MarketCap {
        // aed: number;
        // ars: number;
        // aud: number;
        // bch: number;
        // bdt: number;
        // bhd: number;
        // bmd: number;
        // bnb: number;
        // brl: number;
        // btc: number;
        // cad: number;
        // chf: number;
        // clp: number;
        // cny: number;
        // czk: number;
        // dkk: number;
        // dot: number;
        // eos: number;
        // eth: number;
        // eur: number;
        // gbp: number;
        // hkd: number;
        // huf: number;
        // idr: number;
        // ils: number;
        // inr: number;
        // jpy: number;
        // krw: number;
        // kwd: number;
        // lkr: number;
        // ltc: number;
        // mmk: number;
        // mxn: number;
        // myr: number;
        // ngn: number;
        // nok: number;
        // nzd: number;
        // php: number;
        // pkr: number;
        // pln: number;
        rub: number;
        // sar: number;
        // sek: number;
        // sgd: number;
        // thb: number;
        // try: number;
        // twd: number;
        // uah: number;
        usd: number;
        // vef: number;
        // vnd: number;
        // xag: number;
        // xau: number;
        // xdr: number;
        // xlm: number;
        // xrp: number;
        // yfi: number;
        // zar: number;
        // bits: number;
        // link: number;
        // sats: number;
    }

    export interface FullyDilutedValuation {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface TotalVolume {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface High24h {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface Low24h {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChange24hInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage1hInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage24hInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage7dInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage14dInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage30dInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage60dInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage200dInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface PriceChangePercentage1yInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface MarketCapChange24hInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface MarketCapChangePercentage24hInCurrency {
        aed: number;
        ars: number;
        aud: number;
        bch: number;
        bdt: number;
        bhd: number;
        bmd: number;
        bnb: number;
        brl: number;
        btc: number;
        cad: number;
        chf: number;
        clp: number;
        cny: number;
        czk: number;
        dkk: number;
        dot: number;
        eos: number;
        eth: number;
        eur: number;
        gbp: number;
        hkd: number;
        huf: number;
        idr: number;
        ils: number;
        inr: number;
        jpy: number;
        krw: number;
        kwd: number;
        lkr: number;
        ltc: number;
        mmk: number;
        mxn: number;
        myr: number;
        ngn: number;
        nok: number;
        nzd: number;
        php: number;
        pkr: number;
        pln: number;
        rub: number;
        sar: number;
        sek: number;
        sgd: number;
        thb: number;
        try: number;
        twd: number;
        uah: number;
        usd: number;
        vef: number;
        vnd: number;
        xag: number;
        xau: number;
        xdr: number;
        xlm: number;
        xrp: number;
        yfi: number;
        zar: number;
        bits: number;
        link: number;
        sats: number;
    }

    export interface MarketData {
        current_price: CurrentPrice;
        // total_value_locked?: any;
        // mcap_to_tvl_ratio?: any;
        // fdv_to_tvl_ratio?: any;
        // roi?: any;
        // ath: Ath;
        // ath_change_percentage: AthChangePercentage;
        // ath_date: AthDate;
        // atl: Atl;
        // atl_change_percentage: AtlChangePercentage;
        // atl_date: AtlDate;
        market_cap: MarketCap;
        // market_cap_rank: number;
        // fully_diluted_valuation: FullyDilutedValuation;
        // total_volume: TotalVolume;
        // high_24h: High24h;
        // low_24h: Low24h;
        // price_change_24h: number;
        // price_change_percentage_24h: number;
        // price_change_percentage_7d: number;
        // price_change_percentage_14d: number;
        // price_change_percentage_30d: number;
        // price_change_percentage_60d: number;
        // price_change_percentage_200d: number;
        // price_change_percentage_1y: number;
        // market_cap_change_24h: number;
        // market_cap_change_percentage_24h: number;
        // price_change_24h_in_currency: PriceChange24hInCurrency;
        // price_change_percentage_1h_in_currency: PriceChangePercentage1hInCurrency;
        // price_change_percentage_24h_in_currency: PriceChangePercentage24hInCurrency;
        // price_change_percentage_7d_in_currency: PriceChangePercentage7dInCurrency;
        // price_change_percentage_14d_in_currency: PriceChangePercentage14dInCurrency;
        // price_change_percentage_30d_in_currency: PriceChangePercentage30dInCurrency;
        // price_change_percentage_60d_in_currency: PriceChangePercentage60dInCurrency;
        // price_change_percentage_200d_in_currency: PriceChangePercentage200dInCurrency;
        // price_change_percentage_1y_in_currency: PriceChangePercentage1yInCurrency;
        // market_cap_change_24h_in_currency: MarketCapChange24hInCurrency;
        // market_cap_change_percentage_24h_in_currency: MarketCapChangePercentage24hInCurrency;
        // total_supply: number;
        // max_supply?: any;
        // circulating_supply: number;
        // last_updated: Date;
    }

    export interface CommunityData {
        facebook_likes?: any;
        twitter_followers: number;
        reddit_average_posts_48h: number;
        reddit_average_comments_48h: number;
        reddit_subscribers: number;
        reddit_accounts_active_48h: number;
        telegram_channel_user_count?: any;
    }

    export interface CodeAdditionsDeletions4Weeks {
        additions?: any;
        deletions?: any;
    }

    export interface DeveloperData {
        forks: number;
        stars: number;
        subscribers: number;
        total_issues: number;
        closed_issues: number;
        pull_requests_merged: number;
        pull_request_contributors: number;
        code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks;
        commit_count_4_weeks: number;
        last_4_weeks_commit_activity_series: any[];
    }

    export interface PublicInterestStats {
        alexa_rank: number;
        bing_matches?: any;
    }

    export interface Market {
        name: string;
        identifier: string;
        has_trading_incentive: boolean;
    }

    export interface ConvertedLast {
        btc: number;
        eth: number;
        usd: number;
    }

    export interface ConvertedVolume {
        btc: number;
        eth: number;
        usd: number;
    }

    export interface Ticker {
        base: string;
        target: string;
        market: Market;
        last: number;
        volume: number;
        converted_last: ConvertedLast;
        converted_volume: ConvertedVolume;
        trust_score: string;
        bid_ask_spread_percentage: number;
        timestamp: Date;
        last_traded_at: Date;
        last_fetch_at: Date;
        is_anomaly: boolean;
        is_stale: boolean;
        trade_url: string;
        token_info_url?: any;
        coin_id: string;
        target_coin_id: string;
    }
