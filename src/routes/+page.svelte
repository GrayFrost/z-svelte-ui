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
		Upload,
	} from '$lib';

	let drawerShow = false;
	const testDrawer = () => {
		drawerShow = !drawerShow;
	}
</script>

<div class="flex flex-col">
	<Affix></Affix>
	<Alert></Alert>
	<Anchor></Anchor>
	<AutoComplete></AutoComplete>
	<Avatar></Avatar>
	<BackTop></BackTop>
	<Badge></Badge>
	<Breadcrumb></Breadcrumb>
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
	<Card></Card>
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
	<Input></Input>
	<InputNumber></InputNumber>
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
	<Tabs>
		<TabPanel active title="title1">panel1</TabPanel>
		<TabPanel title="title2">panel2</TabPanel>
	</Tabs>
	<Tag></Tag>
	<TimePicker></TimePicker>
	<Timeline></Timeline>
	<Tooltip></Tooltip>
	<Transfer></Transfer>
	<Tree></Tree>
	<Upload></Upload>
</div>
