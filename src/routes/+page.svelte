<script>
	import {
		Affix,
		Alert,
		Anchor,
		AutoComplete,
		Avatar,
		BackTop,
		Badge,
		Breadcrumb,
		BreadcrumbItem,
		Button,
		ButtonGroup,
		Calendar,
		Card,
		Carousel,
		Cascader,
		Checkbox,
		Col,
		Collapse,
		ColorPicker,
		DatePicker,
		Drawer,
		Dropdown,
		Form,
		Grid,
		InfiniteScroll,
		Input,
		InputNumber,
		List,
		Menu,
		Message,
		Modal,
		Notification,
		Pagination,
		Popconfirm,
		Popover,
		Progress,
		Radio,
		Rate,
		Row,
		Select,
		Seperator,
		Skeleton,
		Slider,
		Space,
		Spinner,
		Steps,
		Switch,
		Table,
		Tabs,
		TabPanel,
		Tag,
		ThemeProvider,
		TimePicker,
		Timeline,
		TimelineItem,
		Tooltip,
		Transfer,
		Tree,
		Upload
	} from '$lib';

	let drawerShow = false;
	let showModal = false;
	const testDrawer = () => {
		drawerShow = !drawerShow;
	};
</script>

<Affix></Affix>
<hr />
<Alert>alert text</Alert>
<Alert type="success">alert text</Alert>
<hr />
<Anchor></Anchor>
<AutoComplete></AutoComplete>
<hr />
<Avatar src="https://avatars.githubusercontent.com/u/18083507?v=4"></Avatar>
<hr />
<BackTop></BackTop>
<hr />
<Badge count={15}>
	<span style="background: green;">badge test</span>
</Badge>
<hr />
<Breadcrumb>
	<BreadcrumbItem>crumb1</BreadcrumbItem>
	<BreadcrumbItem>crumb2</BreadcrumbItem>
</Breadcrumb>
<hr />
<ThemeProvider config={{theme: 'dark'}}>
	<Button>default</Button>
	<Button type="primary">primary</Button>
	<Button type="dashed">dashed</Button>
	<Button type="text">text</Button>
	<Button type="link">link</Button>
</ThemeProvider>

<Button>default</Button>
<Button type="primary">primary</Button>
<Button type="dashed">dashed</Button>
<Button type="text">text</Button>
<Button type="link">link</Button>
<hr />
<ButtonGroup>
	<Button>default</Button>
	<Button type="primary">primary</Button>
	<Button type="dashed">dashed</Button>
</ButtonGroup>
<hr />
<Calendar></Calendar>
<hr />
<Card class="w-60 h-80">
	card content
</Card>
<hr />
<Carousel></Carousel>
<Cascader></Cascader>
<Checkbox></Checkbox>
<Col></Col>
<Collapse></Collapse>
<ColorPicker></ColorPicker>
<DatePicker></DatePicker>
<hr />
<button on:click={testDrawer}>test drawer</button>
<Drawer visible={drawerShow}></Drawer>
<hr />
<Dropdown></Dropdown>
<Form></Form>
<Grid></Grid>
<InfiniteScroll></InfiniteScroll>
<hr />
<Input></Input>
<hr />
<InputNumber></InputNumber>
<hr />
<List></List>
<Menu></Menu>
<Message></Message>
<hr />
<Button on:click={() => showModal = true}>open modal</Button>
<Modal
	title="modal title"
	open={showModal} on:close={() => showModal = false}
>
	modal content
	<span slot="footer">footer</span>
</Modal>
<hr />
<Notification></Notification>
<Pagination></Pagination>
<Popconfirm></Popconfirm>
<Popover></Popover>
<Progress progress={45}></Progress>
<Radio></Radio>
<hr />
<Rate value={3.3} size={48}></Rate>
<hr />
<Row></Row>
<Select></Select>
<Seperator />
<Skeleton></Skeleton>
<Slider></Slider>
<hr />
<Space direction="vertical">
	test space
	<div>hello world space</div>
</Space>
<hr />
<Spinner></Spinner>
<Steps></Steps>
<Switch></Switch>
<Table></Table>
<hr />
<Tabs>
	<TabPanel active title="title1">panel1</TabPanel>
	<TabPanel title="title2">panel2</TabPanel>
</Tabs>
<hr />
<Tag>hello tag</Tag>
<Tag color="orange">hello tag</Tag>
<Tag color="red">hello tag</Tag>
<Tag color="green">hello tag</Tag>
<Tag color="yellow">hello tag</Tag>
<hr />
<TimePicker></TimePicker>
<hr />
<Timeline>
	<TimelineItem>
		<div style="height: 50px;">item 1</div>
	</TimelineItem>
	<TimelineItem>item 2</TimelineItem>
	<TimelineItem>item 3</TimelineItem>
</Timeline>
<hr />
<Tooltip></Tooltip>
<Transfer></Transfer>
<Tree></Tree>
<Upload></Upload>

<style>
	hr {
		margin: 16px 0;
	}
</style>