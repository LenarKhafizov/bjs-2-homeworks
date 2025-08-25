class AlarmClock{
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;        
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error ('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.find(setTime => setTime.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({
            time,
            callback,
            canCall: true            
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(remove => remove.time !== time);
    }

    getCurrentFormattedTime() {
        return  new Date().toLocaleTimeString().slice(0, -3);       
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(startUp => {
                if (startUp.time === this.getCurrentFormattedTime() && startUp.canCall) {
                    startUp.canCall = false;
                    startUp.callback();
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(reset => reset.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}