import React, { Component } from 'react';

const themes = {
    light: {
        border: '#2c61ac',
        text: '#63B8FF',
        wave: '#2c61ac'
    },
    dark: {
        border: '#1874CD',
        text: '#87CEFF',
        wave: '#6495ED'
    }
}
class WaveProgress extends Component {
    constructor(props) {
        super(props);
        if (props.r && !isNaN(+props.r)) {
            this.r = +props.r;
        } else {
            console.error("Invalid radius(props.r):", props.r);
            this.r = 50;
        }
        if (props.percentage && !isNaN(+props.percentage)) {
            this.percentage = +props.percentage;
        } else {
            console.error("Invalid percentage(props.percentage):", props.percentage);
            this.percentage = 0;
        }
        this.theme = Object.keys(themes).includes(props.theme)? themes[props.theme]: themes['light'];
        this.canvas = React.createRef();
        this.borderCanvas = React.createRef();
        this.offset = 0;
    }
    clipCircle = (r) => {
        this.ctx.beginPath();
        this.ctx.arc(this.r, this.r, r, 0, 2 * Math.PI, true);
        this.ctx.closePath();
        this.ctx.clip();
    }
    redrawCircle = () => {
        this.ctx.clearRect(0, 0, this.r * 2, this.r * 2);
        this.border.strokeStyle = this.theme.border;
        const lineWidth = 2;
        this.border.lineWidth = lineWidth;
        this.border.beginPath();
        this.border.arc(this.r, this.r, this.r - lineWidth / 2, 0, 2 * Math.PI, true);
        this.border.closePath();
        this.border.stroke();
        const fontSize = this.r / 4;
        this.border.font = fontSize + 'px Arial';
        this.border.textAlign = 'center';
        this.border.fillStyle = this.theme.text;
        this.border.fillText(this.percentage + "%", this.r, this.r + fontSize);
        this.border.fillText("募集进度", this.r, this.r-5);
    }
    drawWave = () => {
        const { percentage } = this;
        this.offset += this.r / 50;
        if (this.offset >= 2 * this.r) {
            this.offset = 0;
        }
        let percentageOffset;
        if (typeof percentage === 'number' && percentage >= 0 && percentage <= 100) {
            percentageOffset = 2 * this.r * percentage / 100 - this.r;
        } else {
            percentageOffset = - this.r;
        }
        const offsetHeight = this.r / 5;
        this.ctx.beginPath();
        this.ctx.fillStyle = this.theme.wave;
        this.ctx.moveTo(-2 * this.r + this.offset, this.r - percentageOffset);
        this.ctx.quadraticCurveTo(-3 * this.r / 2 + this.offset, this.r - offsetHeight - percentageOffset, -this.r + this.offset, this.r - percentageOffset);
        this.ctx.quadraticCurveTo(-this.r / 2 + this.offset, this.r + offsetHeight - percentageOffset, 0 + this.offset, this.r - percentageOffset);
        this.ctx.quadraticCurveTo(this.r / 2 + this.offset, this.r - offsetHeight - percentageOffset, this.r + this.offset, this.r - percentageOffset);
        this.ctx.quadraticCurveTo(3 * this.r / 2 + this.offset, this.r + offsetHeight - percentageOffset, 2 * this.r + this.offset, this.r - percentageOffset);
        this.ctx.lineTo(2 * this.r + this.offset, 2 * this.r);
        this.ctx.lineTo(-2 * this.r + this.offset, 2 * this.r);
        this.ctx.lineTo(-2 * this.r + this.offset, this.r);
        this.ctx.closePath();
        this.ctx.fill();
    }
    draw = () => {
        this.ctx.clearRect(0, 0, this.r * 2, this.r * 2);
        this.drawWave();
        requestAnimationFrame(this.draw);
    }
    componentDidMount() {
        const canvas = this.canvas.current;
        if (canvas.getContext) {
            this.ctx = canvas.getContext('2d');
            this.border = this.borderCanvas.current.getContext('2d');
            this.clipCircle(this.r - this.r / 10);
            this.redrawCircle(this.r);
            requestAnimationFrame(this.draw);
        }
    }
    componentDidUpdate() {
        this.redrawCircle();
    }
    render() {
        return (
            <div style={{ position: 'relative'}}>
                <canvas style={{ position: 'absolute' }} ref={this.canvas} width={this.r * 2} height={this.r * 2}></canvas>
                <canvas style={{ position: 'absolute' }} ref={this.borderCanvas} width={this.r * 2} height={this.r * 2}></canvas>
            </div>
        );
    }
}

export default WaveProgress;