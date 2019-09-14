export default function getHandWrite(api) {
    const handWrite = api ? require('./web').default : require('./electron').default;
    handWrite.init && handWrite.init(api);
    return handWrite;
}