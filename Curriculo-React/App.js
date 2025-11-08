import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Linking,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

// Cores extraídas do CSS :root fornecido
const COLORS = {
  cor1: '#f5eedc',
  cor2: '#27548A',
  cor3: '#183B4E',
  cor4: '#DDA853',
  cor5: '#FFFFFF',
  cor6: '#0b0d12',
  corPreta: '#000000',
  corBranca: '#FFFFFF',
};

export default function App() {
  const scrollRef = useRef(null);
  const apresentacaoRef = useRef(null);
  const sobreRef = useRef(null);
  const formacaoRef = useRef(null);
  const habilidadesRef = useRef(null);
  const contatoRef = useRef(null);
  const enderecoRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current || !scrollRef?.current) return;
    ref.current.measureLayout(
      scrollRef.current,
      (x, y) => {
        scrollRef.current.scrollTo({ x: 0, y: y, animated: true });
      },
      () => {}
    );
  };

  return (
    <View style={styles.app}>
      <StatusBar style="light" />
      <View style={styles.nav}>
        <ScrollView horizontal contentContainerStyle={styles.navInner} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollTo(apresentacaoRef)}>
            <Text style={styles.navLinkText}>Vinícius dos Santos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollTo(sobreRef)}>
            <Text style={styles.navLinkText}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollTo(formacaoRef)}>
            <Text style={styles.navLinkText}>Formação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollTo(habilidadesRef)}>
            <Text style={styles.navLinkText}>Habilidades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollTo(contatoRef)}>
            <Text style={styles.navLinkText}>Contato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollTo(enderecoRef)}>
            <Text style={styles.navLinkText}>Endereço</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView ref={scrollRef} style={styles.container} contentContainerStyle={styles.content}>
        <View ref={apresentacaoRef} style={styles.section}>
          <View style={styles.row}>
            <Image source={require('./assets/icon.png')} style={styles.foto} />
            <View style={styles.headerText}>
              <Text style={styles.title}>Vinícius dos Santos Oliveira</Text>
              <Text style={styles.subtitle}>(Analista de Qualidade)</Text>
            </View>
          </View>
        </View>

        <View style={styles.hr} />

        <View ref={sobreRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre</Text>
          <Text style={styles.paragraph}>
            Estudante em Análise e Desenvolvimento de Sistemas pelo programa de bolsas Embarque Digital. Sou
            movido pela curiosidade em buscar soluções nas mais diversas linguagens de programação.
          </Text>
          <Text style={styles.contactTitle}>Contato:</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Telefone: </Text>(81) 99877-7963</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Email: </Text>viniciuscontato2024@gmail.com</Text>
          <View style={styles.linksRow}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/vinícius-oliveira-ads')}>
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ViniciusHubb')}>
              <Text style={styles.linkText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.hr} />

        <View ref={formacaoRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          <View>
            <Text style={styles.paragraph}><Text style={styles.bold}>Tecnólogo em ADS</Text></Text>
            <Text style={styles.small}><Text style={styles.bold}>Universidade: </Text>Universidade SENAC</Text>
            <Text style={styles.small}><Text style={styles.bold}>Período: </Text>2024 - 2026</Text>
            <Text style={styles.small}><Text style={styles.bold}>Descrição: </Text>Graduação em Análise e Desenvolvimento de Sistemas.</Text>
          </View>
        </View>

        <View style={styles.hr} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          <View style={styles.card}>
            <Text style={styles.small}><Text style={styles.bold}>2025 - Atual</Text>  CWI Software — Estágio como QA</Text>
          </View>
        </View>

        <View style={styles.hr} />

        <View ref={habilidadesRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <View>
            <Text style={styles.paragraph}>• Desenvolvimento de Sistemas</Text>
            <Text style={styles.paragraph}>• Engenharia de Requisitos</Text>
            <Text style={styles.paragraph}>• Trabalho em equipe</Text>
            <Text style={styles.paragraph}>• Java, Python, JavaScript</Text>
            <Text style={styles.paragraph}>• Banco de Dados MySQL</Text>
            <Text style={styles.paragraph}>• Desenvolvimento Web (HTML, CSS, JavaScript)</Text>
            <Text style={styles.paragraph}>• Metodologias Ágeis (Kanban)</Text>
          </View>
        </View>

        <View style={styles.hr} />

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View ref={contatoRef} style={styles.section}>
            <Text style={styles.sectionTitle}>Contato</Text>
            <Text style={styles.paragraph}>Preencha o formulário para entrar em contato:</Text>
            <View style={styles.formRow}>
              <TextInput style={styles.input} placeholder="Nome*" />
              <TextInput style={styles.input} placeholder="Sobrenome*" />
            </View>
            <View style={styles.formRow}>
              <TextInput style={styles.input} placeholder="Email*" keyboardType="email-address" />
              <TextInput style={styles.input} placeholder="Telefone*" keyboardType="phone-pad" />
            </View>
            <View style={styles.formRowSingle}>
              <TextInput style={styles.input} placeholder="Mensagem" multiline numberOfLines={4} />
            </View>
            <View style={styles.buttonsRow}>
              <View style={styles.btnWrap}><Button color={COLORS.cor3} title="Limpar" onPress={() => {}} /></View>
              <View style={styles.btnWrap}><Button color={COLORS.cor4} title="Enviar" onPress={() => {}} /></View>
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.hr} />

        <View ref={enderecoRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Endereço</Text>
          <Text style={styles.paragraph}>Praça do Marco Zero — Recife, PE</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyright © 2025 Vinícius dos Santos Oliveira. Todos os Direitos Reservados.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: COLORS.corBranca },
  nav: { backgroundColor: COLORS.cor3, paddingTop: 30 },
  navInner: { alignItems: 'center', paddingVertical: 8 },
  navLink: { marginHorizontal: 8, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8, backgroundColor: COLORS.cor3 },
  navLinkText: { color: COLORS.cor1, fontWeight: '700', fontSize: 16 },
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 40 },
  section: { marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center' },
  foto: { width: 120, height: 120, borderRadius: 8, marginRight: 12 },
  headerText: { flex: 1 },
  title: { fontSize: 22, color: COLORS.cor3, fontWeight: '800' },
  subtitle: { fontSize: 16, color: COLORS.cor2 },
  hr: { height: 8, backgroundColor: COLORS.cor4, marginVertical: 8, borderRadius: 4 },
  sectionTitle: { fontSize: 20, color: COLORS.cor3, marginBottom: 8 },
  paragraph: { color: COLORS.cor6, fontSize: 14, textAlign: 'left', marginBottom: 6 },
  contactTitle: { fontWeight: '700', marginTop: 6, marginBottom: 4 },
  bold: { fontWeight: '700' },
  linksRow: { flexDirection: 'row', gap: 12 },
  linkText: { color: COLORS.cor2, marginRight: 12, textDecorationLine: 'underline' },
  small: { color: COLORS.cor6, fontSize: 13, marginBottom: 4 },
  card: { backgroundColor: COLORS.cor1, padding: 8, borderRadius: 6 },
  formRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8, marginBottom: 8 },
  formRowSingle: { marginBottom: 8 },
  input: { flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 6, padding: 8, marginBottom: 4 },
  buttonsRow: { flexDirection: 'row', justifyContent: 'center', gap: 12, marginTop: 8 },
  btnWrap: { marginHorizontal: 8, minWidth: 120 },
  footer: { backgroundColor: COLORS.cor3, padding: 12, marginTop: 12, borderRadius: 6 },
  footerText: { color: COLORS.cor1, textAlign: 'center' },
});
