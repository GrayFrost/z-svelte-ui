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
		TimePicker,
		Timeline,
		Tooltip,
		Transfer,
		Tree,
		Upload
	} from '$lib';

	let drawerShow = false;
	const testDrawer = () => {
		drawerShow = !drawerShow;
	};
</script>

<Affix></Affix>
<Alert></Alert>
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
<Modal></Modal>
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
<Space direction="vertical">
	test
	<div>hello world</div>
</Space>
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
<Timeline></Timeline>
<Tooltip></Tooltip>
<Transfer></Transfer>
<Tree></Tree>
<Upload></Upload>

<style>
	hr {
		margin: 16px 0;
	}
</style>