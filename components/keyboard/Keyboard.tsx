import { StyleSheet, View } from "react-native";
import RoundButton, { RoundButtonGroup } from "./RoundButton";
import Grid, { Row, Column } from '../common/Grid';
import Button from "./Button";

type Props = {
  padding: number;
  gutter: number;
};
export default function Keyboard({
  padding = 10,
  gutter = 10,
}: Props) {
  const containerWidth = 360;
  const blockWidth = (containerWidth - 2*padding - 2*gutter) / 3;

  const funBtnWidth = (containerWidth - 2*padding - 5*gutter) / 6;
  const numBtnWidth = (containerWidth - 2*padding - 4*gutter) / 5;

  return (
    <View style={styles.keyboard}>
      <Row gutter={gutter}>
        <Block width={blockWidth} gutter={gutter}></Block>
        <DPad width={blockWidth}></DPad>
        <Block width={blockWidth} gutter={gutter}></Block>
      </Row>
      <Column>
        <Row gutter={gutter}>
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
        </Row>
        <Row gutter={gutter}>
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
        </Row>
        <Row gutter={gutter}>
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
          <Button width={funBtnWidth} />
        </Row>
      </Column>
      <Column>
        <Row gutter={gutter}>
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
        </Row>
        <Row gutter={gutter}>
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
        </Row>
        <Row gutter={gutter}>
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
        </Row>
        <Row gutter={gutter}>
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
          <Button width={numBtnWidth} />
        </Row>
      </Column>
    </View>
  );
}

type BlockProps = {
  width: number;
  gutter: number;
};
function Block({
  width,
  gutter = 10,
}: BlockProps) {
  const buttonWidth = (width - gutter) / 2;
  return (
    <Column>
      <RoundButtonGroup />
      <Row gutter={gutter}>
        <Button width={buttonWidth}></Button>
        <Button width={buttonWidth}></Button>
      </Row>
    </Column>
  );
}

type DPadProps = {
  width: number;
};
function DPad({
  width,
}: DPadProps) {
  const style = {
    width: width,
    height: 1,
  };
  return (
    <View style={[styles.dPad, style]}></View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    width: 340,
  },
  dPad: {
    backgroundColor: "gray",
  },
});
