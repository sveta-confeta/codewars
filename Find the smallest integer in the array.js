class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce((min,el)=>min<el ? min :el)
    }
}