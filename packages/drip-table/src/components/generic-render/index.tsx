/*
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2021 JD Network Technology Co., Ltd.
 */

import classnames from 'classnames';
import React from 'react';

import {
  type DripTableDriver,
  type DripTableExtraOptions,
  type DripTableRecordTypeBase,
  type DripTableRecordTypeWithSubtable,
  DripTableTableInformation,
} from '@/types';
import RichText from '@/components/rich-text';
import { type IDripTableContext } from '@/context';
import { type DripTableProps } from '@/index';

import styles from './index.module.less';

interface GenericRenderElementBasic {
  /**
   * 包裹 <Col> 样式名
   */
  className?: string;
  /**
   * 包裹 <Col> 样式
   */
  style?: React.CSSProperties;
  /**
   * 宽度：
   * {number}      跨度，取值 0-24。
   * {'flex-auto'} 自动伸缩。
   * {string}      透传给元素的 width 样式值。
   */
  span?: number | 'flex-auto' | string;
  /**
   * 对齐方式
   * {'flex-start'}    左对齐。
   * {'center'}        居中。
   * {'flex-end'}      右对齐。
   * {'space-between'} 两端对齐。
   * {'space-around'}  等间对齐。
   */
  align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  /**
   * 是否可见
   */
  visible?: boolean;
}

interface GenericRenderSpacerElement extends GenericRenderElementBasic {
  /**
   * 占位区域
   */
  type: 'spacer';
}

interface GenericRenderTextElement extends GenericRenderElementBasic {
  /**
   * 文本展示
   */
  type: 'text';
  /**
   * 文本内容
   */
  text: string;
}

interface GenericRenderHTMLElement extends GenericRenderElementBasic {
  /**
   * 富文本展示
   */
  type: 'html';
  /**
   * 富文本内容
   */
  html: string;
}

interface GenericRenderSearchElement extends GenericRenderElementBasic {
  /**
   * 基本搜索
   */
  type: 'search';
  /**
   * 搜索区域类名
   */
  wrapperClassName?: string;
  /**
   * 搜索区域样式
   */
  wrapperStyle?: React.CSSProperties;
  /**
   * 暗纹提示
   */
  placeholder?: string;
  /**
   * 显示清空按钮
   */
  allowClear?: boolean;
  /**
   * 搜索按钮文字
   */
  searchButtonText?: string;
  /**
   * 搜索按钮大小
   */
  searchButtonSize?: 'large' | 'middle' | 'small';
  /**
   * 多维度搜索维度指定
   */
  searchKeys?: { label: string; value: number | string }[];
  /**
   * 多维度搜索默认维度值
   */
  searchKeyDefaultValue?: number | string;
}

interface GenericRenderSlotElement extends GenericRenderElementBasic {
  /**
   * 用户自定义组件插槽
   */
  type: 'slot';
  /**
   * 插槽渲染函数标识符
   */
  slot: string;
  /**
   * 透传给自定组件的属性值
   */
  props?: Record<string, unknown>;
}

interface GenericRenderInsertButtonElement extends GenericRenderElementBasic {
  type: 'insert-button';
  insertButtonClassName?: string;
  insertButtonStyle?: React.CSSProperties;
  insertButtonText?: string;
  showIcon?: boolean;
}

interface GenericRenderDisplayColumnSelectorElement extends GenericRenderElementBasic {
  /**
   * 展示列选择器
   */
  type: 'display-column-selector';
  /**
   * 展示列选择器提示文案
   */
  selectorButtonText?: string;
  /**
   * 选择器按钮样式
   */
  selectorButtonType?: React.ComponentProps<DripTableDriver['components']['Button']>['type'];
}

export type DripTableGenericRenderElement =
  | GenericRenderSpacerElement
  | GenericRenderTextElement
  | GenericRenderHTMLElement
  | GenericRenderSearchElement
  | GenericRenderSlotElement
  | GenericRenderInsertButtonElement
  | GenericRenderDisplayColumnSelectorElement;

interface GenericRenderProps<
  RecordType extends DripTableRecordTypeWithSubtable<DripTableRecordTypeBase, NonNullable<ExtraOptions['SubtableDataSourceKey']>>,
  ExtraOptions extends Partial<DripTableExtraOptions> = never,
> {
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 展示元素配置
   */
  schemas: DripTableGenericRenderElement[];
  tableProps: DripTableProps<RecordType, ExtraOptions>;
  tableState: IDripTableContext;
  setTableState: IDripTableContext['setTableState'];
}

const GenericRender = <
  RecordType extends DripTableRecordTypeWithSubtable<DripTableRecordTypeBase, NonNullable<ExtraOptions['SubtableDataSourceKey']>>,
  ExtraOptions extends Partial<DripTableExtraOptions> = never,
>(props: GenericRenderProps<RecordType, ExtraOptions>) => {
  const { tableProps, tableState, setTableState } = props;
  const Button = tableProps.driver.components.Button;
  const CheckOutlined = tableProps.driver.icons.CheckOutlined;
  const Col = tableProps.driver.components.Col;
  const DownOutlined = tableProps.driver.icons.DownOutlined;
  const Dropdown = tableProps.driver.components.Dropdown;
  const Input = tableProps.driver.components.Input;
  const Menu = tableProps.driver.components.Menu;
  const PlusOutlined = tableProps.driver.icons.PlusOutlined;
  const Row = tableProps.driver.components.Row;
  const Select = tableProps.driver.components.Select;

  const [displayColumnVisible, setDisplayColumnVisible] = React.useState(false);

  const [searchStr, setSearchStr] = React.useState('');
  const [searchKey, setSearchKey] = React.useState<GenericRenderSearchElement['searchKeyDefaultValue']>(props.schemas.map(s => (s.type === 'search' ? s.searchKeyDefaultValue : '')).find(s => s));
  const tableInfo = React.useMemo((): DripTableTableInformation<RecordType> => ({ id: tableProps.schema.id, dataSource: tableProps.dataSource }), [tableProps.schema.id, tableProps.dataSource]);

  const renderColumnContent = (config: DripTableGenericRenderElement) => {
    if (config.type === 'spacer') {
      return null;
    }

    if (config.type === 'text') {
      return <h3 className={styles['generic-render-text-element']}>{ config.text }</h3>;
    }

    if (config.type === 'html') {
      return <RichText className={styles['generic-render-html-element']} html={config.html} />;
    }

    if (config.type === 'search') {
      return (
        <div style={config.wrapperStyle} className={classnames(styles['generic-render-search-element'], config.wrapperClassName)}>
          { config.searchKeys && (
            <Select
              defaultValue={config.searchKeyDefaultValue}
              className={styles['generic-render-search-element__select']}
              value={searchKey}
              onChange={value => setSearchKey(value)}
            >
              { config.searchKeys.map((item, i) => <Select.Option key={i} value={item.value}>{ item.label }</Select.Option>) }
            </Select>
          ) }
          <Input.Search
            allowClear={config.allowClear}
            placeholder={config.placeholder}
            enterButton={config.searchButtonText || true}
            size={config.searchButtonSize}
            value={searchStr}
            onChange={e => setSearchStr(e.target.value.trim())}
            onSearch={(value) => { tableProps.onSearch?.({ searchKey, searchStr: value }, tableInfo); }}
          />
        </div>
      );
    }

    if (config.type === 'slot') {
      const Slot = tableProps.slots?.[config.slot] || tableProps.slots?.default;
      if (Slot) {
        return (
          <Slot
            {...config.props}
            className={classnames(styles['generic-render-slot-element'], typeof config.props?.className === 'string' ? config.props.className : '')}
            slotType={config.slot}
            driver={tableProps.driver}
            schema={tableProps.schema}
            dataSource={tableProps.dataSource}
            onSearch={(searchParams) => { tableProps.onSearch?.(searchParams, tableInfo); }}
          />
        );
      }
      return <span className={styles['generic-render-slot-element__error']}>{ `自定义插槽组件渲染函数 tableProps.slots['${config.slot}'] 不存在` }</span>;
    }

    if (config.type === 'insert-button') {
      return (
        <Button
          className={classnames(styles['generic-render-insert-button-element'], config.insertButtonClassName)}
          type="primary"
          icon={config.showIcon && <PlusOutlined />}
          style={config.insertButtonStyle}
          onClick={e => tableProps.onInsertButtonClick?.(e, tableInfo)}
        >
          { config.insertButtonText }
        </Button>
      );
    }

    if (config.type === 'display-column-selector') {
      const hidableColumns = tableProps.schema.columns.filter(c => c.hidable);
      if (hidableColumns.length === 0) {
        return null;
      }
      const menu = (
        <Menu
          onClick={(e) => {
            setTableState((state) => {
              const displayColumnKeys = state.displayColumnKeys.filter(k => k !== e.key) || [];
              if (!state.displayColumnKeys.includes(e.key)) {
                displayColumnKeys.push(e.key);
              }
              tableProps.onDisplayColumnKeysChange?.(displayColumnKeys, tableInfo);
              return { displayColumnKeys };
            });
          }}
        >
          {
            hidableColumns.map(column => (
              <Menu.Item
                key={column.key}
                icon={<span style={{ opacity: tableState.displayColumnKeys.includes(column.key) ? 1 : 0 }}><CheckOutlined /></span>}
              >
                { column.title }
              </Menu.Item>
            ))
          }
        </Menu>
      );
      return (
        <Dropdown
          className={styles['generic-render-display-column-selector-element']}
          trigger={['click']}
          overlay={menu}
          visible={displayColumnVisible}
          onVisibleChange={(v) => { setDisplayColumnVisible(v); }}
        >
          <Button type={config.selectorButtonType}>
            { config.selectorButtonText || '展示列' }
            <DownOutlined />
          </Button>
        </Dropdown>
      );
    }

    return null;
  };

  if (props.schemas.length > 0) {
    return (
      <div className={styles['generic-render']} style={props.style}>
        <Row>
          {
            props.schemas.map((item, index) => (
              <Col
                key={index}
                className={item.className}
                style={{
                  width: typeof item.span === 'string' && item.span !== 'flex-auto' ? item.span : void 0,
                  display: 'flex',
                  flex: item.span === 'flex-auto' ? '1 1 auto' : void 0,
                  justifyContent: item.align || 'center',
                  paddingLeft: index === 0 ? '0' : '3px',
                  paddingRight: index === props.schemas.length - 1 ? '3px' : '0',
                  ...item.style,
                }}
                span={typeof item.span === 'string' ? void 0 : item.span}
              >
                { item.visible !== false ? renderColumnContent(item) : null }
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
  return null;
};

export default GenericRender;
