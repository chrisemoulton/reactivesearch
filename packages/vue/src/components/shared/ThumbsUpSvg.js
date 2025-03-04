const ThumbsUpSvg = {
	name: 'ThumbsUpSvg',
	props: ['clickHandler', 'className'],
	render() {
		return (
			<svg
				stroke="currentColor"
				fill="none"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				class={this.$props.className}
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
				onClick={this.$props.clickHandler}
			>
				<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
			</svg>
		);
	},
};

export default ThumbsUpSvg;
